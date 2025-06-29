import { useEffect, useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { tableConfigs } from "../config/TableConfigs";

const Table = () => {
  const location = useLocation();

  const [currentConfig, setCurrentConfig] = useState(null);
  const [rows, setRows] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const currentPath = decodeURIComponent(location.pathname);

    const sortedConfigs = [...tableConfigs].sort(
      (a, b) => b.pathMatch.length - a.pathMatch.length
    );

    const matchedConfig = sortedConfigs.find((cfg) =>
      currentPath.startsWith(cfg.pathMatch)
    );

    if (matchedConfig) {
      setCurrentConfig(matchedConfig);
      setRows(matchedConfig.data || []);
    } else {
      setCurrentConfig(null);
      setRows([]);
    }

    setSortOrder(null);
  }, [location.pathname]);

  const toggleSort = () => {
    if (!currentConfig) return;

    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

    const sortedRows = [...rows].sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();

      if (newSortOrder === "asc") {
        return timeA - timeB;
      } else {
        return timeB - timeA;
      }
    });

    setSortOrder(newSortOrder);
    setRows(sortedRows);
  };

  const renderCellContent = (value) => {
    if (typeof value === "string" && value.endsWith(".png")) {
      return (
        <img
          src={value}
          alt="content"
          className="w-[90px] h-[60px] object-contain"
        />
      );
    }
    return value;
  };

  if (!currentConfig) {
    return <div>No data</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white">
        <thead>
          <tr>
            {currentConfig.headers.map((header) => (
              <th key={header.key} className="px-4 py-2 text-left font-medium">
                {header.label}
              </th>
            ))}
            <th
              onClick={toggleSort}
              className="px-4 py-2 text-left cursor-pointer font-medium select-none"
            >
              <div className="flex items-center gap-2">
                Tarix{" "}
                {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border text-sm">
              {currentConfig.headers.map((header) => (
                <td key={header.key} className="px-4 py-2 border">
                  {renderCellContent(row[header.key])}
                </td>
              ))}
              <td className="px-4 py-2 border">{row.date}</td>
              <td className="px-4 flex justify-end items-center h-[60px] border-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="#2C2C2E"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="#2C2C2E"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="#2C2C2E"
                    strokeWidth="2"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
