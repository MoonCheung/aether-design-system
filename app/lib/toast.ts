import queryString, { StringifyOptions } from 'query-string'

type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'

export const generateToastQuery = ({
  message,
  type,
  url,
  additionalQuery,
  options
}: {
  message: string
  type: ToastType
  url: string
  additionalQuery?: Record<string, unknown>
  options?: StringifyOptions
}) =>
  queryString.stringifyUrl(
    {
      url,
      query: {
        toast_message: message,
        toast_type: type,
        ...additionalQuery
      }
    },
    {
      arrayFormat: 'comma',
      skipEmptyString: true,
      ...options
    }
  )
