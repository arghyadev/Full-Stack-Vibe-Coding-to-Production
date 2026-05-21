import type {ReactNode} from 'react'

interface FeatureContainerProps {
  title: string
  children: ReactNode
}

export function FeatureContainer({children, title}: FeatureContainerProps) {
  return (
    <div className="w-full max-w-md">
        <div className="flex bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-t-lg">
            {title}
        </div>
        <div className="border border-gray-200 rounded-b-lg p-4">
            {children}
        </div>
    </div>
  )
}
