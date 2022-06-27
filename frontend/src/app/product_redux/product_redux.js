import Axios from "axios"

const DEFAULT_STATE = {
    ProductTable: [],
    OrderTable: []
}

export const product = {
    state: DEFAULT_STATE,
    reducers: {
        SET_PRODUCT_LIST(state, payload) {
            return { ...state, ProductTable: payload }
        },
        SET_ORDER_LIST(state, payload) {
            let data = {...payload[0],
                count:1
            }
            return { ...state, OrderTable: [...state.OrderTable,data] }
        }
    },
    effects: (dispatch) => ({
        async fetchProductlist(payload) {
            Axios.get('http://localhost:3001/product')
                .then((response) => {
                    dispatch.product.SET_PRODUCT_LIST(response.data)
                })
        },
        async fetchOrderlist(payload) {
            Axios.get("http://localhost:3001/product/orderitem",
                {
                    params: {
                        orderitem: payload
                    }
                }
                ).then((response) => {
                dispatch.product.SET_ORDER_LIST(response.data)
            })
        }
    })
}