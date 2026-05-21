import { createFileRoute } from '@tanstack/react-router'
import { StopWatch } from '../features/stopwatch/components/StopWatch'

export const Route = createFileRoute('/effect-challenge')({
  component: StopWatch,
})
