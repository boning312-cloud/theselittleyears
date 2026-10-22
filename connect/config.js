// T-051 dev test only: the dev project's public (anon / publishable) key, the same one the app ships. Not a secret.
window.CONNECT_CONFIG = {
  supabaseUrl: "https://ulvqpmkzehvmefukocib.supabase.co",
  publishableKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsdnFwbWt6ZWh2bWVmdWtvY2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxOTM2ODcsImV4cCI6MjEwNTc2OTY4N30.cmQPyYZlLYhnEC7Vi48AxUrybyXM6a4cc58CBfM8aA8",
  allowPassword: true, // test mode until Apple web sign-in is set up (T-051 step 9 turns it off)
};
