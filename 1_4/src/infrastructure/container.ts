import BookRepository from './BookRepository'
import "reflect-metadata"
import { Container, decorate, injectable } from "inversify"

export const container = new Container();

decorate(injectable(), BookRepository);
container.bind(BookRepository).toSelf()

