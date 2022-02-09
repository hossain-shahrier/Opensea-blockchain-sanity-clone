import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8azn5gk9',
  dataset: 'production',
  apiVersion: '2022-02-10',
  token:
    'skdplrMOnJCsDoo9yokvX6J4H3faxgK8KWwtzj0c3MD0DmzVMltJigrftZWY4WHPbLozEAttwxW9IE4LjeQJGlyMVSxOTnnBeCuMeoUSJAIpIJ95pQbdmNPkodh1dwQKXbsf94zWJMIjGc84qEMh8C94XZc6cTZaN0XkGuJS2KnPWRVhbGA9',
  useCdn: false,
})
