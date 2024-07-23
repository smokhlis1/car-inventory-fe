import { useState } from 'react'
import Button from "./Button";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
  { field: 'make', headerName: "Make", flex: 1 },
  { field: 'model', headerName: "Model", flex: 1 },
  { field: 'year', headerName: "Year", flex: 1 },
  { field: 'color', headerName: "Color", flex: 1 }
];

function DataTable() {
  const [open, setOpen] = useState(false);
  const { carData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<any>([]);
  
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDelete = async () => {
    if (selectionModel.length > 0) {
      await server_calls.delete(selectionModel[0]);
      getData();
      console.log(`Selection model: ${selectionModel}`);
      setTimeout(() => { window.location.reload() }, 500);
    } else {
      console.log('No row selected');
    }
  }

  return (
    <>
      <Modal
        id={selectionModel}
        open={open}
        onClose={handleClose}
      />
      <div className="flex flex-row">
        <div>
          <button 
            className="p-3 m-3 bg-red-400 rounded hover:bg-red-800 hover:text-black"
            onClick={handleOpen}
          >
            Create New Car
          </button>
        </div>
        <Button 
          onClick={handleOpen} 
          className='p-3 m-3 bg-red-300 rounded hover:bg-slate-800 hover:text-black'
        >
          Update
        </Button>
        <Button 
          onClick={handleDelete} 
          className='p-3 m-3 bg-red-300 rounded hover:bg-slate-800 hover:text-black'
        >
          Delete
        </Button>
      </div>
      <div className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '100%' }}
      >
        <h2 className="p-3 bg-red-300 my-2 rounded">My Monsters</h2>
        <DataGrid 
          rows={carData} 
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;