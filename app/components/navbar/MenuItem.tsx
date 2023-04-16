"use client";

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div className="py-3 px-4 hover:bg-neutral-100 transition font-semibold">
			{label}
		</div>
	);
};

export default MenuItem;
