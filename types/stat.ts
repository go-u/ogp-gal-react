export interface StatsProps {
  Stats: stat[]
}

export interface StatProps {
  Stat: stat
}

export type stat = {
  fqdn: string,
  title: string,
  description: string,
  image: string,
  count: number
}
