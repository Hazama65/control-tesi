import { useEffect, useState } from 'react'
import { HiOutlineBarsArrowDown,HiOutlineBarsArrowUp  } from "react-icons/hi2";
import { LuChevronsUpDown,LuChevronsLeft,LuChevronLeft,LuChevronRight,LuChevronsRight   } from "react-icons/lu";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from '@tanstack/react-table';
import defaultData from '../../data_insc.json'
import classNames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'


const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord);
  // console.log(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 500)

    return () => clearTimeout(timeout);
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}

export const TablesIns = () => {
  const [data, setData] = useState(defaultData)
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])

  const columns = [
    {
      accessorKey: 'document_name',
      header: () => <span>Nombre</span>,
      cell: info => <span className='font-bold'>{info.getValue()}</span>
    },
    {
      accessorKey: 'document_status',
      header: () => <span>Estado</span>,
      cell: info => {
        return (
          <span className={classNames({
            'text-white px-2 rounded-full font-semibold': true,
            'bg-red-500': 'Inactivo' === info.getValue(),
            'bg-green-500': 'Approved' === info.getValue()
          })}>
            {info.getValue()}
          </span>
        )
      },
      enableSorting: true
    },
    {
      accessorKey: 'actions',
      header: 'Acciones',
      cell: info => {
        return (
          <div className='button'>
            <input className="archivo" type='file'></input>
          </div>
        )
      },
      enableSorting: false
    }
  ]

  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;

    const firstIndex = (pageIndex * pageSize) + 1;
    const lastIndex = (pageIndex * pageSize) + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex
    }
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting
  })

  return (
    <div className='container-tabla'>

      <div className='search-container'>
        <div className='relative'>
          <DebouncedInput
            type="text"
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            className='search'
            placeholder='Buscar...'
          />
        </div>
      </div>
      <div className='container-table-data'>
        <table className='table'>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="filas" >
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="celda-encabezado">
                    {header.isPlaceholder
                      ? null
                      :
                      <div
                        className={classNames({
                          'cursor-pointer select-none flex justify-between': header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <HiOutlineBarsArrowUp   className='ordenar-arriba' />,
                          desc: <HiOutlineBarsArrowDown className='ordenar-abajo' />
                        }[header.column.getIsSorted()] ?? (header.column.getCanSort() ? <LuChevronsUpDown  className='arriba-abajo' /> : null)}
                      </div>
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="filas" >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="datos" >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='foot'>
        <div className='pag-mov'>
          <button
            className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}>
            <LuChevronsLeft  className='w-5 h-5' />
          </button>
          <button
            className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            <LuChevronLeft  className='w-5 h-5' />
          </button>

          {table.getPageOptions().map((value, key) => (
            <button key={key}
              className={classNames({
                "text-gray-600 bg-gray-200 py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                "bg-indigo-200 text-indigo-700": value === table.getState().pagination.pageIndex
              })}
              onClick={() => table.setPageIndex(value)}>
              {value + 1}
            </button>
          ))}

          <button
            className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            <LuChevronRight  className='w-5 h-5' />
          </button>
          <button
            className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}>
            <LuChevronsRight  className='w-5 h-5' />
          </button>
        </div>
        <div className='consulta'>
          Mostrando de {getStateTable().firstIndex}&nbsp;
          a {getStateTable().lastIndex}&nbsp;
          del total de {getStateTable().totalRows} registros
        </div>
        <select className='more-pags'
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}>
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="20">20 pág.</option>
          <option value="25">25 pág.</option>
          <option value="50">50 pág.</option>
        </select>
      </div>
    </div>
  )
}
