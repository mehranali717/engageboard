import { Route, Routes } from "react-router-dom"
import { Home, LoggingIn, Profile, Registration, Leads, Broadcast, Calendar, Conversations, Analytics, Pipeline } from "../pages"
import { AuthLayout, Mainlayout } from "../layouts"

const AllRoutes =()=>  {
    return <Routes>
                <Route path="/" element={<AuthLayout><Registration/></AuthLayout>}/>
                <Route path="/login" element={<AuthLayout><LoggingIn/></AuthLayout>}/>
                <Route path="/home" element={<Mainlayout><Home/></Mainlayout>}/>
                <Route path="/leads" element={<Mainlayout><Leads/></Mainlayout>}/>
                <Route path="/broadcast" element={<Mainlayout><Broadcast/></Mainlayout>}/>
                <Route path="/calendar" element={<Mainlayout><Calendar/></Mainlayout>}/>
                <Route path="/conversations" element={<Mainlayout><Conversations/></Mainlayout>}/>
                <Route path="/analytics" element={<Mainlayout><Analytics/></Mainlayout>}/>
                <Route path="/pipeline" element={<Mainlayout><Pipeline/></Mainlayout>}/>
                <Route path="/profile" element={<Mainlayout><Profile/></Mainlayout>}/>
    </Routes>
}
export default AllRoutes