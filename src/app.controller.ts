import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextService } from './next/next.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly next: NextService) {}

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    // 把原本由Nest处理的主页转交给next
    return this.next.render('/index', req, res);
  }
}
