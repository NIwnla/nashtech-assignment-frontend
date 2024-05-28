import { LoadingOutlined } from '@ant-design/icons';
import { Input, Spin, Table, Tag } from "antd";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { fetchAllPosts } from "../../services/posts.service";
const Index = () => {
    const [posts, setPosts] = useState([])
    const [totalPosts, setTotalPosts] = useState(101);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const [isSearching, setIsSearching] = useState(false)

    const { Column } = Table
    const { Search } = Input

    const searchDebounce = useDebouncedCallback((search) => {
        setSearch(search)
        setIsSearching(false)
    }, 1000)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true)
                console.log(sort, order)
                const data = await fetchAllPosts({ page, limit, sort, order, search });
                setIsLoading(false)
                setPosts(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [page, limit, sort, order, search]);

    const onTableChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        setPage(pagination?.current)
        setLimit(pagination?.pageSize)
        setOrder(sorter?.order)
        setSort(sorter?.field)
    };

    const onSearchChange = (event) => {
        setIsSearching(true)
        searchDebounce(event.target.value)
    }

    return (
        <div>
            <Search
                style={{
                    width: 500
                }}
                placeholder="search title or body"
                onChange={onSearchChange}
                loading={isSearching}
                enterButton /><br />
            {isLoading ?
                (
                    <div
                        style={{
                            marginTop: "10%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{
                                        fontSize: 128,
                                    }}
                                    spin
                                />
                            }
                        />
                    </div >
                ) :
                (
                    <div>
                        <Tag color="yellow"><Link to='/posts/create' style={{ color: "red" }}>Create</Link></Tag>
                        <Table
                        style={{margin: 15}}
                            dataSource={posts}
                            onChange={onTableChange}
                            pagination={
                                {
                                    current: page,
                                    showQuickJumper: true,
                                    total: totalPosts,
                                }
                            }
                        >
                            <Column title="id" dataIndex="id" />
                            <Column title="title" dataIndex="title" sorter />
                            <Column title="body" dataIndex="body" sorter />
                            <Column title="action"
                                dataIndex="id"
                                width={200}
                                render={(id) => (
                                    <div>
                                        <Tag color='blue'><Link to={`/posts/${id}`} style={{ color: 'blue' }}>Details</Link></Tag>
                                        <Tag color='green'><Link to={`/posts/edit/${id}`} style={{ color: 'green' }}>Edit</Link></Tag>
                                        <Tag color='red'><Link to={`/posts/delete/${id}`} style={{ color: 'red' }}>Delete</Link></Tag>
                                    </div>
                                )} />
                        </Table>
                    </div>

                )}


        </div>
    )
}
export default Index