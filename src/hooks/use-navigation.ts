import { useContext } from "react"
import NavigationContext from "../context/Navigation.tsx"

function useNavigation() {
	return useContext(NavigationContext)
}
export default useNavigation
