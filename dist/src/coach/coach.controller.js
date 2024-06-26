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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachController = void 0;
const common_1 = require("@nestjs/common");
const coach_service_1 = require("./coach.service");
const client_1 = require("@prisma/client");
let CoachController = class CoachController {
    constructor(coachService) {
        this.coachService = coachService;
    }
    create(createCoachDto) {
        return this.coachService.create(createCoachDto);
    }
    findAll() {
        return this.coachService.findAll();
    }
    findOne(id) {
        return this.coachService.findOne(id);
    }
    update(id, updateCoachDto) {
        return this.coachService.update(id, updateCoachDto);
    }
    delete(id) {
        return this.coachService.delete(id);
    }
};
exports.CoachController = CoachController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "delete", null);
exports.CoachController = CoachController = __decorate([
    (0, common_1.Controller)("coach"),
    __metadata("design:paramtypes", [coach_service_1.CoachService])
], CoachController);
//# sourceMappingURL=coach.controller.js.map