import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';
import { Link } from './link.entity';
export declare class LinkController {
    private linksService;
    constructor(linksService: LinksService);
    getLinks(): Promise<Link[]>;
    getLink(linkId: number): Promise<Link | undefined>;
    addLink(createLinkDto: CreateLinkDto): Promise<Link>;
}
