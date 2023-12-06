
import {  Routes, Route, Navigate} from 'react-router-dom'
import { DashboardPage } from '../Dashboard/pages/DashboardPage'
import { DashboardIns } from '../Dashboard/pages/DashboardIns'
import { DashboardReins } from '../Dashboard/pages/DashboardReins'


export const ControlRouter = () => {
  return (
    <>

        <Routes>
                <Route path="/" element={<DashboardPage/>} />
                <Route path="/inscription" element={<DashboardIns/>} />
                <Route path="/reinscription" element={<DashboardReins/>} />
                <Route 
                    path="*"
                    element={<Navigate to="/" />}
                /> 
        </Routes>

    </>
  )
}