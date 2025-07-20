'use client'
import ErrorAlert from '../components/errorAlert/errorAlert'

export default function Error({
  error,
}: {
  error: Error
}) {
  return <ErrorAlert message={error.message}/>
}