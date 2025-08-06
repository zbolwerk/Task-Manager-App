interface DataTableProps<T> {
    columns: { key: keyof T; label: string }[];
    data: T[];
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
  }
  
  export default function DataTable<T extends { id: number }>({
    columns,
    data,
    onEdit,
    onDelete,
  }: DataTableProps<T>) {
    return (
      <table className="min-w-full bg-white border border-gray-300 shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-2 border">
                {column.label}
              </th>
            ))}
            {(onEdit || onDelete) && <th className="px-4 py-2 border"></th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center p-4 text-gray-500">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-4 py-2 border">
                    {String(row[column.key])}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="px-4 py-2 border space-x-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(row)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  