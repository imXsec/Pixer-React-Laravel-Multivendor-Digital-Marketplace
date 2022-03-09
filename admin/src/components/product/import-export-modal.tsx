import Card from "@components/common/card";
import { DownloadIcon } from "@components/icons/download-icon";
import { useModalState } from "@components/ui/modal/modal.context";
import { useTranslation } from "next-i18next";
import ImportProducts from "./import-products";

const ExportImportView = () => {
	const { data: shopId } = useModalState();
	const { t } = useTranslation();
	return (
		<Card className="flex flex-col min-h-screen md:min-h-0">
			<div className="w-full mb-5">
				<h1 className="text-lg font-semibold text-heading">
					{t("common:text-export-import")}
				</h1>
			</div>

			<div className="grid grid-cols-2 gap-5">
				<ImportProducts />

				<a
					href={`${process?.env?.NEXT_PUBLIC_REST_API_ENDPOINT}/export-products/${shopId}`}
					target="_blank"
					className="flex flex-col items-center justify-center p-5 border-2 border-dashed rounded cursor-pointer border-border-base h-36 focus:border-accent-400 focus:outline-none"
				>
					<DownloadIcon className="w-10 text-muted-light" />

					<span className="mt-4 text-sm font-semibold text-center text-accent">
						{t("common:text-export-products")}
					</span>
				</a>
			</div>
		</Card>
	);
};

export default ExportImportView;
