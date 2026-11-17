import './Dialog.css'
import {Button, Modal } from 'react-bootstrap'

type DialogProps = {
    Title?: string;
    mostrar: boolean;
    mensagem: string;
    textoConfirmar: string;
    TextoCancelar: string;
    aoFechar: () => void;
    aoConfirmar: () => void;
  }

function Dialog({Title, 
  mostrar, 
  mensagem = "Está é uma mensagem padrão",
  textoConfirmar = "Confirmar",
  TextoCancelar = "Cancelar",
  aoFechar, 
  aoConfirmar} : DialogProps) {
  
    return (
       <>
          <Modal show={mostrar} onHide={aoFechar} centered>

            <Modal.Header closeButton>
              <Modal.Title>{Title ? Title : "Texto Padrão"}</Modal.Title>
            </Modal.Header>

              <Modal.Body>{mensagem}  </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={aoFechar}>{TextoCancelar}
                </Button>
                <Button variant='primary' onClick={aoConfirmar}>{textoConfirmar}
                </Button>
              </Modal.Footer>

          </Modal>       
       </>
    )
}
export default Dialog;