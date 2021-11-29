import classes from './productContainer.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {useState,useMemo,useEffect} from "react";
import productAction from '../../actions/productAction';
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table'
import {Link} from 'react-router-dom';
import Moment from 'moment';

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    )
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },

        useFilters,
       useGlobalFilter,
        useSortBy,
        usePagination,
    )

    // Render the UI for your table
    return (
        <div className={[classes.contain].join(" ")}>
        <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
        />
            <table className={[classes.productlist].join(' ')} {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} {...column.render('Header')==='Info'?{className:[classes.info].join(" ")}:{className:[classes.tableHeader].join(" ")}}>
                                 {column.render('Header')}
                                 <span>
                                       {column.isSorted
                                           ? column.isSortedDesc
                                               ? ' 🔽'
                                               : ' 🔼'
                                           : ''}
                                   </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <ul className={[classes.pagination].join(" ")}>
                <li className="page-item" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <a className="page-link">First</a>
                </li>
                <li className="page-item" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <a className="page-link">{'<'}</a>
                </li>
                <li className="page-item" onClick={() => nextPage()} disabled={!canNextPage}>
                    <a className="page-link">{'>'}</a>
                </li>
                <li className="page-item" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    <a className="page-link">Last</a>
                </li>
                <li>
                    <a className="page-link">
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </a>
                </li>
                {' '}
                <select
                    className="form-control"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                    style={{ width: '120px', height: '38px' }}
                >
                    {[5, 10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </ul>
              <br/>
            <div>Showing {page.length} results</div>

        </div >

    )
}

function PaginationTableComponent() {
  const dispatch = useDispatch();
   useEffect(()=>{
     dispatch(productAction.products('products'));
   },[PaginationTableComponent]);
    const products = useSelector(state => state.productReducer);
    if(products){
      products.products.map((key,value)=>{
        const dataSet = [];
        dataSet.push(<Link to={"/admin/products/edit/"+products.products[value].slug+"/"}>Edit</Link>);
        //dataSet.push( <i className="fa fa-trash fa-x btn btn-danger btn-filled"></i>);
        //dataSet.push( <i className="fa  fa-history fa-x btn btn-warning btn-filled"></i>);
        products.products[value].edit=dataSet;
        products.products[value].added_on = Moment(products.products[value].added_on).format('DD MMM,YYYY');
        products.products[value].key=key;
      });
    }
     const data =products;
     console.log(data);
    const columns = useMemo(
        () => [

            {
                Header: 'Products',
                columns: [
                  {
                      Header: 'Title',
                      accessor: 'title',
                  },
                  {
                      Header: 'Cost Price',
                      accessor: 'cost_price',
                  },
                    {
                        Header: 'Sale Price',
                        accessor: 'sale_price',
                    },
                    {
                        Header: 'Inventory',
                        accessor: 'inventory',
                    },
                    {
                        Header: 'Added On',
                        accessor: 'added_on',
                    },
                    {
                        Header: 'Edit',
                        accessor: 'edit',
                    },
                ],
            },
        ],
        []
    )
    return (
      <Table columns={columns} data={data.products} />

    )
}

export default PaginationTableComponent;
