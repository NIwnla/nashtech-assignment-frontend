import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
export default function PostTable(props) {
    const { Column } = Table
    // const onChange = (pagination, filters, sorter, extra) => {
    //     console.log('params', pagination, filters, sorter, extra);
    // };


    return (
        <Table
            dataSource={props.data}
            // onChange={onChange}
            showSorterTooltip={{
                target: 'sorter-icon',
            }}
        >
            <Column title="id" dataIndex="id" />
            <Column title="title" dataIndex="title" sorter={(a, b) => a.title.length - b.title.length} />
            <Column title="body" dataIndex="body" sorter={(a, b) => a.body.length - b.body.length} />
            <Column title="action"
                dataIndex="id"
                width={200}
                render={(id) => (
                    <div>
                        <Tag color='blue'><Link to={`/posts/${id}`} style={{color:'blue'}}>Details</Link></Tag>
                        <Tag color='green'><Link to={`/posts/edit/${id}`} style={{ color: 'green' }}>Edit</Link></Tag>
                        <Tag color='red'><Link to={`/posts/delete/${id}`} style={{ color: 'red' }}>Delete</Link></Tag>
                    </div>
                )} />
        </Table>
    )
}
