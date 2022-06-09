import {Users} from "./Users";


export function InvitaionContainer() {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/4 divide-y">
            <div className="p-6 ">
                <h3 className="font-['Lato'] text-base leading-6 font-medium text-gray-900">Invite Users</h3>
                <div className="col-span-6 sm:col-span-3 flex justify-between items-center ">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:outline-none block w-3/4 border h-8 rounded p-2"
                        placeholder="Email (press enter for multiple)"
                    />
                    <button
                        type="submit"
                        className="h-8 px-4 border border-transparent text-sm font-medium rounded-md bg-gray-200 focus:outline-none text-slate-500 focus:ring-1 focus:ring-gray-200 hover:bg-gray-300"
                    >
                        Send invite
                    </button>
                </div>
            </div>
                <Users />
        </div>
    )
}
