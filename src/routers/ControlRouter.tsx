
import {  Routes, Route, Navigate} from 'react-router-dom'
import { DashboardPage } from '../Dashboard/pages/DashboardPage'


export const ControlRouter = () => {
  return (
    <>

        <Routes>
                <Route path="/" element={<DashboardPage/>} />
                <Route 
                    path="*"
                    element={<Navigate to="/" />}
                /> 
        </Routes>

    </>
  )
}