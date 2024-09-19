interface WorkspaceIdPageParams {
  params: {
    workspaceId: string
  }
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageParams) => {
  return <div>ID: {params.workspaceId} </div>
}

export default WorkspaceIdPage
