import React, { useEffect, useState } from 'react';
import LeftMenu from "./LeftMenu";
import styled from 'styled-components';
import { MainArea, Texttab, ParamArea } from '../styles';
import BsPlusCircle from '@meronex/icons/bs/BsPlusCircle';
import BiEdit from '@meronex/icons/bi/BiEdit';
import AiOutlineDelete from '@meronex/icons/ai/AiOutlineDelete';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width:100%;
`;

const InputField = styled.input`
  margin-right: 10px;
  width:100%;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  position:relative;
  cursor: pointer;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:15px
`;

const EditMenu = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  height:50px;
  width:50px;
`;

const AddButton = styled(BsPlusCircle)`
height:20px;
width:20px;
color:white;
`
const DeleteButton = styled(AiOutlineDelete)`
height:20px;
width:20px;
color:white;

`
const EditButton = styled(BiEdit)`
height:20px;
width:20px;
color:white;
`;

const Tag = styled.span`
    color:white;
    width:50px;
    
`


const FormBuilder = (props) => {
    const { fields, setFields } = props;
    const [editMenu, setEditMenu] = useState(null);

    const handleAddField = () => {
        const newId = (fields.length + 1) - 1;
        setFields([...fields, { id: newId, value: '', action: "included", prompt: "single-prompt", weight: "" }]);


    };

    const handleDeleteField = (id) => {
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);

    };

    const handleEditField = (id) => {
        if (editMenu === id) {
            setEditMenu(null);
        } else {
            setEditMenu(id);
        }
    };

    const handleInputChange = (id, value) => {
        const updatedFields = fields.map((field) => {
            if (field.id === id) {
                return { ...field, value };
            }
            return field;
        });
        setFields(updatedFields);
    };

    return (
        <Texttab>
            <FormContainer>
                {fields.map((field) => (
                    <InputContainer key={field.id}>
                        {
                            fields[field.id]?.action === "excluded" &&
                            <Tag>--no</Tag>
                        }
                        <InputField
                            type="text"
                            value={field.value}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                        /> {
                            fields[field.id]?.weight
                                && fields[field.id]?.action === "included"
                                ? <Tag>::{fields[field.id]?.weight}</Tag>
                                : " "
                        }
                        <IconButton onClick={() => handleDeleteField(field.id)}>
                            <DeleteButton />
                        </IconButton>
                        <LeftMenu
                            fieldId={field.id}
                            fields={fields}
                            setFields={setFields}
                        />
                    </InputContainer>
                ))}
                <IconButton onClick={handleAddField}>
                    <AddButton />
                    Add Field
                </IconButton>
            </FormContainer>
        </Texttab>
    );
};

export default FormBuilder;
