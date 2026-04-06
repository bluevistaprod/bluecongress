CREATE TABLE `features` (
	`id` varchar(64) NOT NULL,
	`offerId` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`included` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `features_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `offers` (
	`id` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`price` int NOT NULL,
	`description` text,
	`targetAudience` text,
	`badge` varchar(255),
	`recommended` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `offers_id` PRIMARY KEY(`id`)
);
