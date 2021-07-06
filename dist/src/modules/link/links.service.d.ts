import { Repository } from 'typeorm';
import { Link } from './link.entity';
import { CreateLinkDto } from './dto/create-link.dto';
export declare class LinksService {
    private readonly LinkRepository;
    constructor(LinkRepository: Repository<Link>);
    createLink(data: CreateLinkDto): Promise<Link>;
    getLinks(): Promise<Link[]>;
    getLink(id: number): Promise<Link | undefined>;
}
