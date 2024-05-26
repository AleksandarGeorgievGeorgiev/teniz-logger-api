"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TrainingService = class TrainingService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTrainingDto) {
        return await this.prisma.training.create({
            data: createTrainingDto,
        });
    }
    async findAll() {
        return await this.prisma.training.findMany();
    }
    async findOne(id) {
        return await this.prisma.training.findFirstOrThrow({
            where: { id },
        });
    }
    async update(id, updateTrainingDto) {
        return await this.prisma.training.update({
            where: { id },
            data: updateTrainingDto,
        });
    }
    async delete(id) {
        return await this.prisma.training.delete({
            where: { id },
        });
    }
};
exports.TrainingService = TrainingService;
exports.TrainingService = TrainingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TrainingService);
//# sourceMappingURL=training.service.js.map