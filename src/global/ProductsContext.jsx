import React, { createContext } from 'react'
import { db } from '..//config/Config'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {

        let prevProducts = this.state.products;
        db.collection('Products').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            
            
            const muestraProductos = changes.map(change => {
                return {
                    
                    ProductID: change.doc.id,
                    ProductName: change.doc.data().ProductName,
                    ProductPrice: change.doc.data().ProductPrice,
                    ProductImg: change.doc.data().ProductImg
                }
            })
            console.log(muestraProductos);
            this.setState({
                products: muestraProductos
                
            })
            this.setState({
                muestraProductos:prevProducts
                
            })
            
        })

    }
    render() {
        return (
            <ProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

