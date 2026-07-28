import { useQuery } from '@tanstack/react-query'

type HealthResponse = {
  status: string
  application: string
  checkedAt: string
}

async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error(`Health request failed: ${response.status}`)
  }

  return response.json()
}

export function ApiStatus() {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    refetchInterval: 5_000,
    retry: false,
  })

  if (isPending) {
    return (
      <p className="text-muted-foreground text-sm" role="status">
        Checking API…
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-destructive text-sm" role="alert">
        API unavailable: {error.message}
      </p>
    )
  }

  return (
    <div className="text-sm" role="status">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-green-500" />
        <span>{data.application}</span>
        <strong className="uppercase">{data.status}</strong>
        {isFetching && (
          <span className="text-muted-foreground">Refreshing…</span>
        )}
      </div>

      <p className="text-muted-foreground text-xs">
        Checked {new Date(data.checkedAt).toLocaleTimeString()}
      </p>
    </div>
  )
}
