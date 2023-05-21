import { create } from 'zustand'
interface GlobalStoreType
{
    miniCartOpen: boolean
    openMiniCart: () => void
    closeMiniCart: () => void
}

export const useGlobalStore = create<GlobalStoreType>(
    ( set ) => ( {
        miniCartOpen: false,
        openMiniCart: () =>
        {
            set( () => ( { miniCartOpen: true } ) )
        },
        closeMiniCart: () =>
        {
            set( () => ( { miniCartOpen: false } ) )
        }
    } )
)
