const TaskLayout=({
children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="bg-blue-400 p-4">
      タスクページ
      {children}
    </div>
  )
}

export default TaskLayout