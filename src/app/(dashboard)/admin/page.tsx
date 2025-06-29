import UserCard from "@/components/user-card"

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Left */}
      <div className=" w-2/3">
      {/* User Cards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      </div>
      {/* Right */}
      <div className="w-1/3">right</div>
    </div>
  )
}

export default AdminPage