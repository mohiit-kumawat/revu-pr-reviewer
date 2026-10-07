import { requireAuth } from '@/features/auth/actions';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { GithubConnectCard } from '@/features/github/components/github-connect-card';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "GitHub App · Dashboard",
  };
  

const DashboardGithubPage = async() => {

    const session = await requireAuth();
    const installation = await getGithubAppInstallationStatus(session.user.id)

  return (
    <>
    <DashboardHeader
    title="GitHub App"
    description="Install or disconnect the reviewer app on your GitHub account."
  />
  <GithubConnectCard userId={session.user.id} installation={installation} />
  </>
  )
}

export default DashboardGithubPage

async function getGithubAppInstallationStatus(id: string) {
    return {
        installed: false,
        userId: id,
    } as any;
}
