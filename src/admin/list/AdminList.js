import React, { useState } from "react";
import { Pagination, Table } from "rsuite";
import { EditIcon } from "../../assets/icons";
import Header from "../../components/base/Header";
import Add from "./Add";
const { HeaderCell, Cell, Column } = Table;
const fakeData = [
  {
    id: 1,
    productName: "Krrish",
    rate: "MK",
    category: "Bangalore",
    quantity: "Waycool",
  },
  {
    id: 2,
    productName: "Krrish",
    rate: "MK",
    category: "Bangalore",
    quantity: "Waycool",
  },
  {
    id: 3,
    productName: "Krrish",
    rate: "MK",
    category: "Bangalore",
    quantity: "Waycool",
  },
];
const AdminList = () => {
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isAddModal, setAddModal] = useState(false);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = fakeData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  const handleAdd = () => {
    setAddModal(true);
  };

  return (
    <div>
      <Add
        isOpen={isAddModal}
        handleClose={() => {
          setAddModal(!isAddModal);
        }}
      />
      <Header
        text="Category"
        addButton
        buttonLabel="Add"
        buttonHandler={() => handleAdd()}
      />
      <div style={{ border: "1px solid #ddd", height: "auto" }}>
        <Table
          bordered={true}
          cellBordered={true}
          headerHeight={40}
          fillHeight={false}
          data={data}
          loading={loading}
        >
          <Column width={50} align="center" fixed>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={200}>
            <HeaderCell>Product Name</HeaderCell>
            <Cell dataKey="productName" />
          </Column>

          <Column width={200}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="rate" />
          </Column>

          <Column width={200}>
            <HeaderCell>Category</HeaderCell>
            <Cell dataKey="category" />
          </Column>
          <Column width={200}>
            <HeaderCell>Quantity</HeaderCell>
            <Cell dataKey="quantity" />
          </Column>
          <Column width={70} fixed="right">
            <HeaderCell>Action</HeaderCell>
            <Cell dataKey="quantity">
              <EditIcon size="2em" />
            </Cell>
          </Column>
        </Table>
        <div style={{ padding: 20 }}>
          <Pagination
            prev
            next
            //   first
            //   last
            ellipsis
            boundaryLinks
            //   maxButtons={5}
            size="xs"
            layout={["total", "|", "limit", "|", "pager"]}
            total={fakeData.length}
            limitOptions={[10, 20]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminList;
