import { useState } from "react";

export function ReportTable() {
    const [rpts, setRpts] = useState([]);
    const [allSelected, setAllSelected] = useState(false);
    function load() {
        setAllSelected(true);
        setRpts([
            {
                name: "5021",
                type: "Crystal",
                date: Date.now(),
                status: "Done",
                lastAction: "Query Export",
                selected: false,
            },
            {
                name: "5022",
                type: "Crystal",
                date: Date.now(),
                status: "60",
                lastAction: "Converting",
                selected: false,
            },
            {
                name: "7401",
                type: "Crystal",
                date: Date.now(),
                status: "Ready",
                lastAction: "",
                selected: false,
            }
        ]);
        console.log(rpts);
        console.log(allSelected);
    }

    function selectRpt(e: any, index: int) {
        //spred op to set selectd in index
        let newRpts = [...rpts];
        newRpts[index].selected = e.target.checked;
        setRpts(newRpts);
    }
    
    function toggleAllChecked(e: any) {
        let newRpts = [...rpts];
        newRpts.forEach((rpt) => {
            rpt.selected = e.target.checked;
        });
        setRpts(newRpts);
    }

    return (
        <>
            <button onClick={() => load()}>Load Table</button>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="border px-4 py-2 font-medium"><input type="checkbox" onClick={(e) => toggleAllChecked(e)}></input></th>
                        <th className="border px-4 py-2 font-medium">Name</th>
                        <th className="border px-4 py-2 font-medium">Type</th>
                        <th className="border px-4 py-2 font-medium">Date</th>
                        <th className="border px-4 py-2 font-medium">Status</th>
                        <th className="border px-4 py-2 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rpts.map((rpt, index) => (
                        <tr>
                            <td className="border px-4 py-2 font-medium"><input type="checkbox" checked={rpt.selected} onClick={(e)=>selectRpt(e, index)}></input></td>
                            <td className="border px-4 py-2 font-medium">{rpt.name}</td>
                            <td className="border px-4 py-2 font-medium">{rpt.type}</td>
                            <td className="border px-4 py-2 font-medium">{Date(rpt.date).toString()}</td>
                            <td className="border px-4 py-2 font-medium">{rpt.status}</td>
                            <td className="border px-4 py-2 font-medium">{rpt.lastAction}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}