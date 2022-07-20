import React, { useState } from "react";
import { Pagination, Table } from "rsuite";
import Header from "../../components/base/Header";
import { EditIcon } from "../../assets/icons";
import Add from "./Add";
const { HeaderCell, Cell, Column } = Table;
const fakeData = [
  {
    id: 1,
    firstName: "Krrish",
    lastName: "MK",
    city: "Bangalore",
    companyName: "Waycool",
  },
  {
    id: 2,
    firstName: "Krrish",
    lastName: "MK",
    city: "Bangalore",
    companyName: "Waycool",
  },
  {
    id: 3,
    firstName: "Krrish",
    lastName: "MK",
    city: "Bangalore",
    companyName: "Waycool",
  },
];

const CategoryList = () => {
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
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={200}>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>

          <Column width={200}>
            <HeaderCell>City</HeaderCell>
            <Cell dataKey="city" />
          </Column>
          <Column width={200}>
            <HeaderCell>Company Name</HeaderCell>
            <Cell dataKey="companyName" />
          </Column>
          <Column width={70} fixed="right">
            <HeaderCell>Action</HeaderCell>
            <Cell dataKey="companyName">
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

export default CategoryList;
