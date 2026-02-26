import { use } from "react";
import { useState } from "react";
import TicketStatus from "./TicketStatus";
import Cards from "./cards";
import img1 from '../assets/vector1.png'
import ReslovedStatus from "./ResolvedStatus";
import ResolvedStatus from "./ResolvedStatus";

const CustomerTicket = ({ fetchPromise }) => {

    const mainData = use(fetchPromise);
    const [data, setData] = useState(fetchPromise);
    const [inProgress, setInProgress] = useState([])
    const [Resolved, setResolved] = useState([])

    const handleClick = (ticket) => {
        console.log('div clicked', ticket);
        const newProgress = [...inProgress, ticket]
        setInProgress(newProgress)
    }

    const handelResolved = (result) => {
        console.log('Resolve card clicked', result);
        const newResolved = [...Resolved, result]
        setResolved(newResolved)


    }
    return (


        <div className="w-400 mx-auto bg-gray-100">
            <div className='max-w-400  mx-auto  bg-gray-100'>
                <div className=" bg-gray-100 flex items-center justify-center mx-auto  w-360 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">

                        {/* In-Progress Card */}
                        <div
                            className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center w-177 h-62.5 shadow-lg
                                   bg-linear-to-br from-violet-600 via-purple-500 to-purple-400"
                        >

                            <div className="absolute rotate-y-180 right-1 rounded-full opacity-100">
                                <img src={img1} alt="" />

                            </div>


                            <div className="absolute  left-1 rounded-full opacity-100">
                                <img src={img1} alt="" />
                            </div>


                            <p className=" text-white/80 text-sm tracking-wider mb-1">In-Progress</p>
                            <p className=" text-white font-semibold text-5xl">
                                <span>{inProgress.length}</span>
                            </p>
                        </div>

                        {/* Resolved Card */}
                        <div
                            className="relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center w-177 h-62.5 shadow-lg
                                   bg-linear-to-br from-emerald-600 via-emerald-500 to-emerald-40"

                        >

                            <div className="absolute rotate-y-180 right-1 rounded-full opacity-100">
                                <img src={img1} alt="" />

                            </div>


                            <div className="absolute  left-1 rounded-full opacity-100">
                                <img src={img1} alt="" />
                            </div>

                            <p className="relative z-10 text-white/80 text-sm tracking-wider mb-1">Resolved</p>
                            <p className="relative z-10 text-white font-semibold text-5xl">
                                <span>{Resolved.length}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <h1 className="font-bold text-2xl mt-5 ">Customer Tickets</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Customer Tickets - takes 2 cols */}

                <div className=" grid grid-cols-1 sm:grid-cols-2 col-span-2 mx-auto gap-5 mb-5 mt-10"
                >
                    {
                        mainData.map((ticket, id) => {


                            return <Cards ticket={ticket} key={id}
                                handleClick={handleClick} data={data}
                                setData={setData}></Cards>
                        }




                        )
                    }
                </div>

                {/* Task Status - takes 1 col */}
                <div className="col-span-1 ">
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold">Task Status</h1>

                        <div className="rounded-lg ">
                            {inProgress.map(result => <TicketStatus
                                handelResolved={handelResolved} key={result.id} result={result}></TicketStatus>)}
                        </div>
                    </div>
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold">Resolved Task</h1>
                        <div className="rounded-lg">
                            {Resolved.map(res => <ResolvedStatus key={res.date} res={res}></ResolvedStatus>)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerTicket;