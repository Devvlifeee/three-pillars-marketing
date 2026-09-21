CREATE TABLE `deck_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`firm` varchar(200),
	`note` text,
	`status` enum('new','sent','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `deck_requests_id` PRIMARY KEY(`id`)
);
