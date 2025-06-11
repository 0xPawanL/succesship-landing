// Analytics utility functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In a real implementation, this would send data to your analytics service
  console.log("Analytics Event:", eventName, properties)
}

export const trackPage = (pageName: string) => {
  // In a real implementation, this would track page views
  console.log("Analytics Page View:", pageName)
}
