import { MetadataRoute } from 'next'
import { allLogs } from 'content-collections'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunny.vestcodes.co'

  const logs = allLogs.map((log) => ({
    url: `${baseUrl}/logs/${log.slug}`,
    lastModified: new Date(log.date),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/manifesto`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/logs`,
      lastModified: new Date(),
    },
    ...logs,
  ]
}
