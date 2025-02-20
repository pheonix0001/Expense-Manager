import { Modal,Button} from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"
export default function ViewExpensesModal({show,handleClose}){
    const {getBudgetExpenses, budgets, deleteBudgets, deleteExpense} = useBudgets()
    return(
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId = "name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId = "max">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control ref={maxRef} type="number" required min={0} step={1}/>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add</Button>
                    </div>
                </Modal.Body>
        </Modal>
    )
}