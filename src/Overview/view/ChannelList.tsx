import ChannelIcon from "../../assets/img/channel-icon.png";
import React, {useEffect, useState} from "react";
import {
    TableBody,
    TableContainer,
    Table,
    TableHeader,
    TableCell,
    TableRow,
    TableFooter,
    Avatar,
    Badge,
    Pagination,
} from '@windmill/react-ui'
import response from "../../utils/demo/tableData";

export const ChannelList: React.FC<{}> = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState<any[]>([])

    // pagination setup
    const resultsPerPage = 10
    const totalResults = response.length

    // pagination change control
    function onPageChange(p: number) {
        setPage(p)
    }

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
    }, [page])

    return (
        <TableContainer>
            <Table>
                <TableHeader>
                    <tr>
                        <TableCell>Channel Name</TableCell>
                        <TableCell>Total Videos</TableCell>
                        <TableCell>Total Subscribers</TableCell>
                        <TableCell>Action</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {data.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-center text-sm">
                                    <Avatar className="hidden mr-3 md:block" src={ChannelIcon} alt="User image" />
                                    <div>
                                        <p className="font-semibold">{user.name}</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">$ {user.amount}</span>
                            </TableCell>
                            <TableCell>
                                <Badge type={user.status}>{user.status}</Badge>
                            </TableCell>
                            <TableCell>
                                <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter>
                <Pagination
                    totalResults={totalResults}
                    resultsPerPage={resultsPerPage}
                    label="Table navigation"
                    onChange={onPageChange}
                />
            </TableFooter>
        </TableContainer>
    )
}