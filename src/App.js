import "./App.css";
import React, { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import wretch from "wretch";

var numbro = require("numbro");

function PriceTable() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [coinData, setCoinData] = useState({ data: {} });

  useEffect(() => {
    wretch(
      "https://crypto-prices-backend-hth3v.ondigitalocean.app/api/coinData"
    )
      .get()
      .json((json) => {
        setCoinData({ data: JSON.parse(json)["data"] });
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  const data = useMemo(
    () => [
      {
        id: 1,
        name:
          (coinData?.data?.[0]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[0]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[0]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[0]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[0]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[0]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[0]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[0]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[0]?.["symbol"] ?? "SYM"),
      },
      {
        id: 2,
        name:
          (coinData?.data?.[1]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[1]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[1]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[1]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[1]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[1]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[1]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[1]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[1]?.["symbol"] ?? "SYM"),
      },
      {
        id: 3,
        name:
          (coinData?.data?.[2]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[2]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[2]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[2]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[2]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[2]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[2]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[2]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[2]?.["symbol"] ?? "SYM"),
      },
      {
        id: 4,
        name:
          (coinData?.data?.[3]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[3]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[3]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[3]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[3]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[3]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[3]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[3]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[3]?.["symbol"] ?? "SYM"),
      },
      {
        id: 5,
        name:
          (coinData?.data?.[4]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[4]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[4]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[4]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[4]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[4]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[4]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[4]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[4]?.["symbol"] ?? "SYM"),
      },
      {
        id: 6,
        name:
          (coinData?.data?.[5]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[5]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[5]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[5]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[5]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[5]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[5]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[5]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[5]?.["symbol"] ?? "SYM"),
      },
      {
        id: 7,
        name:
          (coinData?.data?.[6]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[6]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[6]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[6]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[6]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[6]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[6]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[6]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[6]?.["symbol"] ?? "SYM"),
      },
      {
        id: 8,
        name:
          (coinData?.data?.[7]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[7]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[7]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[7]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[7]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[7]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[7]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[7]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[7]?.["symbol"] ?? "SYM"),
      },
      {
        id: 9,
        name:
          (coinData?.data?.[8]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[8]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[8]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[8]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[8]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[8]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[8]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[8]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[8]?.["symbol"] ?? "SYM"),
      },
      {
        id: 10,
        name:
          (coinData?.data?.[9]?.["name"] ?? "name") +
          " " +
          (coinData?.data?.[9]?.["symbol"] ?? "SYM"),
        price: parseFloat(
          coinData?.data?.[9]?.["quote"]?.["USD"]?.["price"] ?? "0.00"
        ),
        p24h: numbro(
          parseFloat(
            coinData?.data?.[9]?.["quote"]?.["USD"]?.["percent_change_24h"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        p7d: numbro(
          parseFloat(
            coinData?.data?.[9]?.["quote"]?.["USD"]?.["percent_change_7d"] ??
              "0.00"
          ) / 100
        ).format({ output: "percent", mantissa: 2, thousandSeparated: true }),
        marketCap: parseFloat(
          coinData?.data?.[9]?.["quote"]?.["USD"]?.["market_cap"] ?? "0"
        ),
        volume: numbro(
          coinData?.data?.[9]?.["quote"]?.["USD"]?.["volume_24h"] ?? "0.00"
        ).format({ thousandSeparated: true, mantissa: 0 }),
        supply:
          numbro(coinData?.data?.[9]?.["circulating_supply"] ?? "0").format({
            thousandSeparated: true,
            mantissa: 0,
          }) +
          " " +
          (coinData?.data?.[9]?.["symbol"] ?? "SYM"),
      },
    ],
    [coinData?.data]
  );

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            Price
          </div>
        ),
        accessor: "price",
        Cell: (row) => (
          <div style={{ textAlign: "right" }}>
            $
            {numbro(row.value).format({ thousandSeparated: true, mantissa: 2 })}
          </div>
        ),
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            24h %
          </div>
        ),
        accessor: "p24h",
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            7d %
          </div>
        ),
        accessor: "p7d",
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            Market Cap
          </div>
        ),
        accessor: "marketCap",
        Cell: (row) => (
          <div style={{ textAlign: "right" }}>
            $
            {numbro(row.value).format({ thousandSeparated: true, mantissa: 0 })}
          </div>
        ),
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            Volume(24h)
          </div>
        ),
        accessor: "volume",
        Cell: (row) => (
          <div style={{ textAlign: "right" }}>
            $
            {numbro(row.value).format({ thousandSeparated: true, mantissa: 0 })}
          </div>
        ),
      },
      {
        Header: () => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            Circulating Supply
          </div>
        ),
        accessor: "supply",
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="lg:w-90 w-full mx-auto overflow-auto">
        <table
          {...getTableProps()}
          className="table-auto w-full text-left whitespace-no-wrap"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm border-gray-700 bg-gray-1000 rounded-tl rounded-bl"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border-t-2 border-gray-700 px-4 py-3 text-gray-200"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-200">
            Cryptocurrency Data
          </h1>
        </div>
        <PriceTable />
      </div>
    </section>
  );
}

export default App;
