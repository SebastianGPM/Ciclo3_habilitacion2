import React, {Fragment} from "react";
import {Link} from "react-router-dom";

function VentasPage(){

    return(
        <Fragment>
            <h1>Ventana de Ventas</h1>
        <Form id="forma" name="forma">
        <fieldset>
            <div class="leyenda">
            <legend style="color: thistle;">Datos de Venta</legend>
            </div>
            <div class="elemento">
            <label for="CodVenta">Código de Venta:</label>
            <input type="number" id="CodVenta" name="CodV" 
            placeholder="ej: 123456" required="true"><br/>
            <label for="NombreCliente">Nombre del Cliente:</label>
            <input type="text" id="NombreCliente" name="NombreCliente" 
            placeholder="ej: Jhon Romero"><br/>
            <label for="IDCliente">Numero de Identificación del Cliente:</label>
            <input type="text" id="IDCliente" name="IDCliente" 
            placeholder="ej: 01234568"><br/>
            <label for="ValorTotal">Nombre del Cliente:</label>
            <input type="text" id="ValorTotal" name="ValorTotal" 
            placeholder="ej: 99990"><br/>
            <label for="IDProducto">Código Producto:</label>
            <input type="text" id="IDProducto"  name="IDProducto" 
            placeholder="ej: P-001"><br/>
            <label for="Fecha">Fecha</label>
            <input type="datetime-local" id="Fecha" name="Fecha"><br/>
            <label for="EstadoPedido">Estado del Pedido:</label>
            <select id="EstadoPedido" name="EstadoPedido">
                <option value="Recibido">Recibido</option>
                <option value="Facturado">Facturado</option>
                <option value="Enviado">Enviado</option>
                <option value="Entregado">Entregado</option>
                <option value="Finalizado">Finalizado</option>
                <option value="Cancelada" class="cancel" >Cancelada</option>
            </select> 
            <br/>
            <p>Comentarios adicionales de la venta</p>
            <textarea name="Comentarios adicionales" > </textarea>
            <br/>
            <input type="submit" value="Enviar"/>
            </div>
        </fieldset>
        </Form>
        </Fragment>
    )
}

export default VentasPage;