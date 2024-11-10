import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import Chat from "./components/Sidebar/Chat"; 
import ChatPage from "./pages/ChatPage/ChatPage";
import Noti from "./components/Sidebar/Noti";
import NotiPage from "./pages/NotiPage/NotiPage"


function App() {
	const [authUser] = useAuthState(auth);

	return (
		<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
				<Route path="/" element={<Chat />} />
                <Route path="/chatpage" element={<ChatPage />} />
                <Route path="/" element={<Noti />} />
				<Route path="/notipage" element={<NotiPage />} />

			</Routes>
		</PageLayout>
	);
}

export default App;
