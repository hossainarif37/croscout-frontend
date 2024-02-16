"use client"
import Loading from "@/components/ui/Loading/Loading";
import { getUsersByRole } from "@/lib/database/getUsers";
import { useAuthContext } from "@/providers/AuthProvider";
import { getStoredToken } from "@/utils/tokenStorage";
import { useEffect, useState } from "react";
import AllUsersTable from "../../components/AllUsersTable/AllUsersTable";

const AllAgentsPage = () => {
    type user = {
        name: string
        role: string
        email: string
    };
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuthContext();


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = getStoredToken();
                setIsLoading(true);
                if (!token) {
                    throw new Error('Token is required for authorization');
                }
                const data = await getUsersByRole({ role: "agent", token });
                // console.log("Data received from getAllUsers:", data);
                setUsers(data.users);
                setIsLoading(false);
            } catch (error) {
                console.error('Error occurred while fetching users:', error);
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
        return <Loading />
    }

    if (users.length <= 0) {
        return <div className="text-center mt-20 text-white min-h-screen"><h1 className="lg:text-4xl text-2xl text-center">Don't have any agent yet.</h1></div>
    }
    return (
        <div className="bg-primary-50 px-3 py-3">
            <h4 className='text-xl mb-3 text-white-50'>All Agents:</h4>
            <AllUsersTable data={users} tableFor="agent"></AllUsersTable>
        </div>
    );
};

export default AllAgentsPage;