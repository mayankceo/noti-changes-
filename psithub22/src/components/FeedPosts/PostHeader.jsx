import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={6}>
			<Flex alignItems={"center"} gap={3}>
				{creatorProfile ? (
					<Link to={`/${creatorProfile.username}`}>
						<Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"md"} />
					</Link>
				) : (
					<SkeletonCircle size='10' />
				)}

				<Flex fontSize={14} fontWeight={640} gap='5'>
					{creatorProfile ? (
						<Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
					) : (
						<Skeleton w={"100px"} h={0} />
					)}

					<Box color={"#000"}>• {timeAgo(post.createdAt)}</Box>
				</Flex>
			</Flex>
			<Box cursor={"pointer"}>
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={12}
					color={"#ff0000"}
					fontWeight={"bold"}
					_hover={{
						color: "black",
					}}
					transition={"0.2s ease-in-out"}
					onClick={handleFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
